var myConfig = {
                        backgroundColor:'transparent',
                        type: "bar",
                        title: {
                            text: "",
                            align: "left",
                            fontFamily: 'Lato',
                            fontSize: 16,
                            padding: "15",
                            fontColor : "#1E5D9E",
                        },
                        subtitle: {
                            text: "Count by Number of Projects",
                            align: "left",
                            fontFamily: 'Lato',
                            fontSize: 12,
                            fontColor: "#777",
                            padding: "15"
                        },
                        legend: {
                            layout: "x1",
                            align: 'right',
                            borderWidth: "0px",
                            backgroundColor:"transparent",
                            marker: {
                                borderRadius: 50,
                            },
                            item: {
                                fontColor: "black"
                            }
                        },
                        plot: {
                            backgroundColor:'transparent',
                            marker: {
                                size: 3.5
                            },
                            tooltip:{
                                visible: false
                            },
                            barSpace: "2"
                        },
                        plotarea: {
                            margin: "90 50 50 50"
                        },
                        scaleX: {
                            offsetY: -20,
                            lineWidth: 0,
                            padding: 20,
                            margin: 20,
                            item: {
                                padding: 5,
                                fontColor : "#1E5D9E",
                                fontFamily: 'Montserrat'
                            },
                            tick: {
                                lineColor: '#797979'
                            },
                            guide: {
                                visible: true,
                                lineColor : '#454646',
                                lineStyle: 'dotted',
                                lineGapSize: '4px',
                                rules: [
                                    {
                                        rule: "%i == 0",
                                        visible: false
                                    }
                                ]
                            },
                            values: [' PRIDE',
                                     'PeptideAtlas',
                                     ' MassIVE',
                                     ' jPOST',
                                     'iProX',
                                    'Panaroma']
                        },
                        scaleY: {
                            maxValue: 8000,
                            lineWidth: 0,
                            item: {
                                padding: "0 10 0 0",
                                fontColor : "#020202",
                                fontFamily: 'Montserrat'
                            },
                            tick: {
                                lineColor: '#D1D3D4'
                            },
                            guide: {
                                visible: true,
                                lineColor : '#202021',
                                lineStyle: 'dotted',
                                lineGapSize: '4px',
                                rules: [
                                    {
                                        rule: "%i == 0",
                                        visible: false
                                    }
                                ]
                            }
                        },
                        crosshairX : {
                            lineColor : "#b6b6b6",
                            trigger : "move",
                            lineStyle : 'dashed',
                            marker : {
                                visible : true,
                                size : 4
                            },
                            scaleLabel : {
                                bold : true,
                                backgroundColor : "#ffffff",
                                fontColor : "#048383",
                                fontSize : "16px",
                                callout : false,
                                paddingTop : 2,
                            },
                            plotLabel : {
                                backgroundColor : "white",
                                borderColor : "#e3e3e3",
                                borderRadius : "5px",
                                bold : true,
                                fontSize : "12px",
                                fontFamily:"Lato",
                                fontColor : "#000000",
                                textAlign : 'right',
                                padding : '15px',
                                shadow : true,
                                shadowAlpha : 0.2,
                                shadowBlur : 5,
                                shadowDistance : 4,
                                shadowColor : "#a1a1a1",
                            }
                        },
                        series : [
                            {
                                text: "ProMetaDB",
                                values: [6575,1600,2000,218, 198,100],
                                backgroundColor: "#258801"
                            },
                            {
                                text: "ProteomeXchange",
                                values : [6080, 135, 509, 171, 71,6],
                                backgroundColor: "#c70331",
                            }
                        ]
                    };
                        zingchart.render({ 
                            id : 'myChart', 
                            data: {
                                graphset: [myConfig]
                            },
                        });