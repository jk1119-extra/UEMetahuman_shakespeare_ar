// ! M_Teeth/Default/FLocalVertexFactory/TMobileBasePassPSFMobileMovableDirectionalLightCSMWithLightmapPolicyHDRLinear64SkylightEnableLocalLights/0/MobileBasePassPixelShader.usf:Main
// Compiled by ShaderConductor
// @Inputs: f4;10:in_var_TEXCOORD10,f4;11:in_var_TEXCOORD11,f4;0:in_var_TEXCOORD0,f4;4:in_var_TEXCOORD4,f4;8:in_var_TEXCOORD8
// @Outputs: f4;0:out_Target0,f1;1:out_Target1
// @PackedUB: View(0): View_ViewToClip(128,16),View_ViewForward(264,3),View_ViewRectMin(512,4),View_ViewSizeAndInvSize(516,4),View_PreExposure(546,1),View_NormalCurvatureToRoughnessScaleBias(732,3),View_SkyLightColor(748,4),View_MobileSkyIrradianceEnvironmentMap(752,32),View_ReflectionCubemapMaxMip(786,1),View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight(792,3),View_bSubsurfacePostprocessEnabled(987,1),View_SSProfilesTextureSizeAndInvSize(988,4)
// @PackedUB: MobileReflectionCapture(1): MobileReflectionCapture_Params(0,4)
// @PackedUB: Primitive(2): Primitive_Flags(0,1)
// @PackedUB: MobileBasePass(3): MobileBasePass_Forward_NumLocalLights(52,1),MobileBasePass_Forward_CulledGridSize(56,3),MobileBasePass_Forward_LightGridPixelSizeShift(60,1),MobileBasePass_Forward_LightGridZParams(64,3)
// @PackedUB: PrecomputedLightingBuffer(4): PrecomputedLightingBuffer_LightMapScale(16,8),PrecomputedLightingBuffer_LightMapAdd(24,8)
// @PackedUB: MobileDirectionalLight(5): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightShadowSize(8,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowDistances(16,4),MobileDirectionalLight_DirectionalLightScreenToShadow(20,64),MobileDirectionalLight_DirectionalLightShadowMapChannelMask(84,1)
// @PackedUB: Material(6): Material_PreshaderBuffer_1(4,4),Material_PreshaderBuffer_2(8,4),Material_PreshaderBuffer_3(12,4),Material_PreshaderBuffer_4(16,4),Material_PreshaderBuffer_5(20,4),Material_PreshaderBuffer_6(24,4),Material_PreshaderBuffer_7(28,4)
// @PackedUBCopies: 0:128-0:h:0:16,0:264-0:m:0:3,0:512-0:m:4:4,0:516-0:h:16:4,0:546-0:h:20:1,0:732-0:h:24:3,0:748-0:h:28:4,0:752-0:h:32:32,0:786-0:m:8:1,0:792-0:h:64:3,0:987-0:h:68:1,0:988-0:h:72:4,1:0-1:h:0:4,2:0-2:u:0:1,3:52-3:u:0:1,3:56-3:i:0:3,3:60-3:u:4:1,3:64-3:h:0:3,4:16-4:m:0:8,4:24-4:m:8:8,5:0-5:m:0:4,5:4-5:m:4:4,5:8-5:m:8:4,5:12-5:m:12:4,5:16-5:m:16:4,5:20-5:h:0:64,5:84-5:u:0:1,6:4-6:h:0:4,6:8-6:h:4:4,6:12-6:h:8:4,6:16-6:h:12:4,6:20-6:h:16:4,6:24-6:h:20:4,6:28-6:h:24:4
// @Samplers: MobileBasePass_Forward_ForwardLocalLightBuffer(0:1),MobileBasePass_Forward_NumCulledLightsGrid(1:1),MobileBasePass_Forward_CulledLightDataGrid(2:1),View_SSProfilesTexture(3:1[View_SSProfilesSampler]),View_SSProfilesPreIntegratedTexture(4:1[View_SSProfilesPreIntegratedSampler]),MobileReflectionCapture_Texture(5:1[MobileReflectionCapture_TextureSampler]),LightmapResourceCluster_LightMapTexture(6:1[LightmapResourceCluster_LightMapSampler]),MobileDirectionalLight_DirectionalLightShadowTexture(7:1[MobileDirectionalLight_DirectionalLightShadowSampler]),Material_Texture2D_0(8:1[Material_Texture2D_0Sampler]),Material_Texture2D_1(9:1[Material_Texture2D_1Sampler]),Material_Texture2D_2(10:1[Material_Texture2D_2Sampler]),Material_Texture2D_3(11:1[Material_Texture2D_3Sampler]),Material_Texture2D_4(12:1[Material_Texture2D_4Sampler]),Material_Texture2D_5(13:1[Material_Texture2D_5Sampler]),Material_Texture2D_6(14:1[Material_Texture2D_6Sampler]),Material_Texture2D_7(15:1[Material_Texture2D_7Sampler]),Material_Texture2D_8(16:1[Material_Texture2D_8Sampler]),Material_Texture2D_9(17:1[Material_Texture2D_9Sampler]),Material_Texture2D_10(18:1[Material_Texture2D_10Sampler])
#version 320 es
#if defined(GL_EXT_control_flow_attributes)
#define out_var_SV_Target1 out_Target1
#define out_var_SV_Target0 out_Target0
#define in_var_TEXCOORD8 in_TEXCOORD8
#define in_var_TEXCOORD4 in_TEXCOORD4
#define in_var_TEXCOORD0 in_TEXCOORD0
#define in_var_TEXCOORD11 in_TEXCOORD11
#define in_var_TEXCOORD10 in_TEXCOORD10
#extension GL_EXT_control_flow_attributes : require
#define SPIRV_CROSS_FLATTEN [[flatten]]
#define SPIRV_CROSS_BRANCH [[dont_flatten]]
#define SPIRV_CROSS_UNROLL [[unroll]]
#define SPIRV_CROSS_LOOP [[dont_unroll]]
#else
#define SPIRV_CROSS_FLATTEN
#define SPIRV_CROSS_BRANCH
#define SPIRV_CROSS_UNROLL
#define SPIRV_CROSS_LOOP
#endif
precision mediump float;
precision highp int;

#define View_SSProfilesTextureSizeAndInvSize (pc0_h[18])
#define View_bSubsurfacePostprocessEnabled (pc0_h[17].x)
#define View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight (pc0_h[16].xyz)
#define View_ReflectionCubemapMaxMip (pc0_m[2].x)
#define View_MobileSkyIrradianceEnvironmentMap(Offset) (pc0_h[8 + int(Offset)])
#define View_SkyLightColor (pc0_h[7])
#define View_NormalCurvatureToRoughnessScaleBias (pc0_h[6].xyz)
#define View_PreExposure (pc0_h[5].x)
#define View_ViewSizeAndInvSize (pc0_h[4])
#define View_ViewRectMin (pc0_m[1])
#define View_ViewForward (pc0_m[0].xyz)
#define View_ViewToClip (mat4(pc0_h[0 + 0].xyzw,pc0_h[0 + 1].xyzw,pc0_h[0 + 2].xyzw,pc0_h[0 + 3].xyzw))
#define SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler ps3
#define SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler ps4
#define SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler ps5
#define SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler ps6
#define SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler ps7
#define SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler ps8
#define SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler ps9
#define SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler ps10
#define SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler ps11
#define SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler ps12
#define SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler ps13
#define SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler ps14
#define SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler ps15
#define SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler ps16
#define SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler ps17
#define SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler ps18
uniform mediump vec4 pc0_m[3];
uniform highp vec4 pc0_h[19];


#define MobileReflectionCapture_Params (pc1_h[0])
uniform highp vec4 pc1_h[1];


#define Primitive_Flags (pc2_u[0].x)
uniform uvec4 pc2_u[1];


#define MobileBasePass_Forward_LightGridZParams (pc3_h[0].xyz)
#define MobileBasePass_Forward_LightGridPixelSizeShift (pc3_u[1].x)
#define MobileBasePass_Forward_CulledGridSize (pc3_i[0].xyz)
#define MobileBasePass_Forward_NumLocalLights (pc3_u[0].x)
uniform highp vec4 pc3_h[1];
uniform ivec4 pc3_i[1];
uniform uvec4 pc3_u[2];


#define PrecomputedLightingBuffer_LightMapAdd(Offset) (pc4_m[2 + int(Offset)])
#define PrecomputedLightingBuffer_LightMapScale(Offset) (pc4_m[0 + int(Offset)])
uniform mediump vec4 pc4_m[4];


#define MobileDirectionalLight_DirectionalLightShadowMapChannelMask (pc5_u[0].x)
#define MobileDirectionalLight_DirectionalLightScreenToShadow(Offset) (mat4(pc5_h[0 + (int(Offset) * 4) + 0].xyzw,pc5_h[0 + (int(Offset) * 4) + 1].xyzw,pc5_h[0 + (int(Offset) * 4) + 2].xyzw,pc5_h[0 + (int(Offset) * 4) + 3].xyzw))
#define MobileDirectionalLight_DirectionalLightShadowDistances (pc5_m[4])
#define MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale (pc5_m[3])
#define MobileDirectionalLight_DirectionalLightShadowSize (pc5_m[2])
#define MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition (pc5_m[1])
#define MobileDirectionalLight_DirectionalLightColor (pc5_m[0])
uniform uvec4 pc5_u[1];
uniform highp vec4 pc5_h[16];
uniform mediump vec4 pc5_m[5];


#define Material_PreshaderBuffer_7 (pc6_h[6])
#define Material_PreshaderBuffer_6 (pc6_h[5])
#define Material_PreshaderBuffer_5 (pc6_h[4])
#define Material_PreshaderBuffer_4 (pc6_h[3])
#define Material_PreshaderBuffer_3 (pc6_h[2])
#define Material_PreshaderBuffer_2 (pc6_h[1])
#define Material_PreshaderBuffer_1 (pc6_h[0])
uniform highp vec4 pc6_h[7];


layout(binding = 0) uniform highp samplerBuffer ps0;
layout(binding = 1) uniform highp usamplerBuffer ps1;
layout(binding = 2) uniform highp usamplerBuffer ps2;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler;
uniform highp sampler2D SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler;
uniform highp sampler2D SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler;
uniform highp sampler2DArray SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler;
uniform highp samplerCube SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler;

layout(location = 0) in vec4 in_var_TEXCOORD10;
layout(location = 1) in vec4 in_var_TEXCOORD11;
layout(location = 2) in highp vec4 in_var_TEXCOORD0[1];
layout(location = 3) in highp vec4 in_var_TEXCOORD4;
layout(location = 4) in highp vec4 in_var_TEXCOORD8;
layout(location = 0) out vec4 out_var_SV_Target0;
layout(location = 1) out highp float out_var_SV_Target1;

vec3 _538;
vec4 _539;
vec3 _540;

void main()
{
    highp float _550 = 1.0 / gl_FragCoord.w;
    highp vec2 _568 = gl_FragCoord.xy - View_ViewRectMin.xy;
    highp vec4 _577 = vec4(((_568 * View_ViewSizeAndInvSize.zw) - vec2(0.5)) * vec2(2.0, -2.0), gl_FragCoord.z, 1.0) * _550;
    highp vec3 _586;
    if (View_ViewToClip[3].w >= 1.0)
    {
        _586 = -View_ViewForward;
    }
    else
    {
        _586 = normalize(-in_var_TEXCOORD8.xyz);
    }
    vec2 _186 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _597 = vec4(_186, sqrt(clamp(1.0 - dot(_186, _186), 0.0, 1.0)), 1.0).xyz * Material_PreshaderBuffer_1.xyz;
    float _94 = _597.z + 1.0;
    vec2 _193 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec4 _608 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp float _611 = _608.x * Material_PreshaderBuffer_1.w;
    vec3 _98 = vec4(_193, sqrt(clamp(1.0 - dot(_193, _193), 0.0, 1.0)), 1.0).xyz * vec3(_611, _611, 1.0);
    vec3 _103 = vec3(_597.xy, _94);
    vec3 _107 = vec3(_98.xy * vec2(-1.0), _98.z);
    vec3 _113 = (_103 * vec3(dot(_103, _107))) - (vec3(_94) * _107);
    float _115 = _113.z + 1.0;
    vec2 _200 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_2.x)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _624 = mix(vec3(0.0, 0.0, 1.0), vec4(_200, sqrt(clamp(1.0 - dot(_200, _200), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_2.y));
    vec3 _123 = vec3(_113.xy, _115);
    vec3 _127 = vec3(_624.xy * vec2(-1.0), _624.z);
    vec3 _133 = (_123 * vec3(dot(_123, _127))) - (vec3(_115) * _127);
    float _135 = _133.z + 1.0;
    highp vec4 _628 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec2 _207 = (_628.xy * vec2(2.0)) - vec2(1.0);
    highp float _631 = sqrt(clamp(1.0 - dot(_207, _207), 0.0, 1.0));
    vec3 _140 = vec3(_133.xy, _135);
    vec3 _143 = vec3(vec4(_207, _631, 1.0).xy * vec2(-1.0), _631);
    vec3 _150 = normalize(mat3(in_var_TEXCOORD10.xyz, cross(in_var_TEXCOORD11.xyz, in_var_TEXCOORD10.xyz) * in_var_TEXCOORD11.w, in_var_TEXCOORD11.xyz) * ((_140 * vec3(dot(_140, _143))) - (vec3(_135) * _143))) * 1.0;
    highp vec3 _636 = (-_586) + ((_150 * dot(_150, _586)) * 2.0);
    highp vec4 _640 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp vec4 _647 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler, Material_PreshaderBuffer_3.xy);
    highp vec4 _651 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec3 _151 = _640.xyz;
    highp vec4 _658 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, Material_PreshaderBuffer_4.xy);
    highp vec4 _664 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _162 = _664.x;
    vec3 _164 = mix(mix(_151, _647.xyz * (_151 / _651.xyz), vec3(0.669921875)), (_658.xyz * (_151 * vec3(1.0380132198333740234375, 1.27521789073944091796875, 1.815602779388427734375))) * vec3(Material_PreshaderBuffer_4.z), vec3(_162));
    highp vec4 _671 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler, Material_PreshaderBuffer_5.yz);
    float _216 = _671.x;
    float _217 = _671.y;
    float _214 = _671.z;
    vec3 _173 = _608.xyz;
    vec3 _175 = normalize(in_var_TEXCOORD11.xyz);
    vec3 _222 = clamp(mix(_164, _164 * vec3((_216 <= 0.0) ? 0.0 : pow(_216, 0.300048828125), (_217 <= 0.0) ? 0.0 : pow(_217, 0.300048828125), (_214 <= 0.0) ? 0.0 : pow(_214, 0.300048828125)), vec3(_162 * clamp(1.0 - ((1.0 - _664.y) * Material_PreshaderBuffer_6.y), 0.0, 1.0))) * _173, vec3(0.0), vec3(1.0));
    float _223 = clamp((_173 * vec3(smoothstep(0.0, Material_PreshaderBuffer_6.z, dot(((vec3(dot(_586, _175)) * _175) * vec3(2.0)) - _586, _586)) * 0.449951171875)).x, 0.0, 1.0);
    highp float _693 = max(0.015625, clamp(mix(Material_PreshaderBuffer_7.x, Material_PreshaderBuffer_6.w, _162), 0.0, 1.0));
    vec3 _226 = dFdx(_150);
    vec3 _227 = dFdy(_150);
    highp float _699 = clamp(pow(max(dot(_226, _226), dot(_227, _227)), View_NormalCurvatureToRoughnessScaleBias.z), 0.001000000047497451305389404296875, 1.0);
    vec3 _231 = vec3(0.07999999821186065673828125 * _223);
    highp vec2 _703 = in_var_TEXCOORD4.xy * vec2(1.0, 0.5);
    highp vec4 _708 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _703);
    vec3 _239 = (_708.xyz * PrecomputedLightingBuffer_LightMapScale(0).xyz) + PrecomputedLightingBuffer_LightMapAdd(0).xyz;
    float _252 = dot(_239, vec3(0.300048828125, 0.58984375, 0.1099853515625));
    float _251 = (exp2((_252 * 16.0) - 8.0) - 0.00390625) * max(0.0, dot((texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _703 + vec2(0.0, 0.5)) * PrecomputedLightingBuffer_LightMapScale(1)) + PrecomputedLightingBuffer_LightMapAdd(1), vec4(_150.yzx, 1.0)));
    highp vec4 _724 = vec4(_150, 1.0);
    highp vec3 _728 = _538;
    _728.x = dot(View_MobileSkyIrradianceEnvironmentMap(0), _724);
    highp vec3 _732 = _728;
    _732.y = dot(View_MobileSkyIrradianceEnvironmentMap(1), _724);
    highp vec3 _736 = _732;
    _736.z = dot(View_MobileSkyIrradianceEnvironmentMap(2), _724);
    vec3 _253 = max(vec3(0.0), _736) * View_SkyLightColor.xyz;
    highp float _738 = _577.w;
    highp vec4 _762;
    int _745 = 0;
    for (;;)
    {
        if (_745 < 4)
        {
            if (_738 < MobileDirectionalLight_DirectionalLightShadowDistances[uint(_745)])
            {
                _762 = MobileDirectionalLight_DirectionalLightScreenToShadow(_745) * vec4(_577.xy, _738, 1.0);
                break;
            }
            _745++;
            continue;
        }
        else
        {
            _762 = vec4(0.0);
            break;
        }
    }
    float _400;
    if (_762.z > 0.0)
    {
        highp vec2 _772 = (_762.xy * MobileDirectionalLight_DirectionalLightShadowSize.xy) - vec2(0.5);
        highp vec2 _773 = fract(_772);
        highp vec2 _777 = (floor(_772) + vec2(1.0)) * MobileDirectionalLight_DirectionalLightShadowSize.zw;
        highp vec4 _783 = vec4((min(1.0 - _762.z, 0.999989986419677734375) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - 1.0);
        highp vec4 _785 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _777, ivec2(-1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _783, vec4(0.0), vec4(1.0));
        highp vec4 _790 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _777, ivec2(1, -1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _783, vec4(0.0), vec4(1.0));
        highp vec4 _795 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _777, ivec2(-1, 1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _783, vec4(0.0), vec4(1.0));
        highp vec4 _800 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _777, ivec2(1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _783, vec4(0.0), vec4(1.0));
        highp float _802 = _773.x;
        highp float _803 = 1.0 - _802;
        highp vec4 _830 = _539;
        _830.x = (((_785.w * _803) + _785.z) + _790.w) + (_790.z * _802);
        highp vec4 _834 = _830;
        _834.y = (((_785.x * _803) + _785.y) + _790.x) + (_790.y * _802);
        highp vec4 _838 = _834;
        _838.z = (((_795.w * _803) + _795.z) + _800.w) + (_800.z * _802);
        highp vec4 _842 = _838;
        _842.w = (((_795.x * _803) + _795.y) + _800.x) + (_800.y * _802);
        highp float _843 = _773.y;
        highp float _852 = clamp((_738 * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.x) + MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.y, 0.0, 1.0);
        _400 = mix(dot(_842, vec4(1.0 - _843, 1.0, 1.0, _843) * 0.111111111938953399658203125), 1.0, _852 * _852);
    }
    else
    {
        _400 = 1.0;
    }
    highp vec4 _871 = vec4(float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 1u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 2u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 4u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 8u) != 0u));
    float _269 = _400 * mix(1.0, dot(vec4(1.0), _871), dot(_871, vec4(1.0)));
    highp float _875 = max(0.0, dot(_150, normalize(_586 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
    uint _878 = uint(((vec4(_540.x, _540.y, _540.z, vec4(1.0, 1.0, 1.0, Material_PreshaderBuffer_7.y).w) * View_bSubsurfacePostprocessEnabled).w * 255.0) + 0.5);
    highp vec2 _887 = (vec2(uvec2(5u, _878)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec4 _889 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _887, 0.0);
    float _283 = _889.z;
    highp float _892 = max(clamp(_693 * (_889.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
    float _287 = clamp(_693 * (_889.y * 2.0), 0.0, 1.0);
    float _273 = mix(_892, _287, _283);
    float _274 = dot(_150, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
    highp float _899 = float(_878);
    highp vec2 _908 = (vec2(uvec2(0u, _878)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec3 _911 = vec3(1.0) * max(0.0, dot(_150, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz));
    vec3 _290 = _222 * 0.318407952785491943359375;
    highp float _916 = 1.0 - (_875 * _875);
    float _291 = _892 * _892;
    highp float _917 = _875 * _291;
    highp float _919 = _291 / (_916 + (_917 * _917));
    float _295 = _287 * _287;
    highp float _920 = _875 * _295;
    highp float _922 = _295 / (_916 + (_920 * _920));
    vec4 _309 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _273) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _310 = _309.x;
    float _313 = exp2((-9.28125) * clamp(abs(dot(_150, _586)) + 1.0013580322265625e-05, 0.0, 1.0));
    vec2 _320 = (vec2(-1.0400390625, 1.0400390625) * ((min(_310 * _310, _313) * _310) + _309.y)) + _309.zw;
    float _304 = clamp(_223 * 4.0, 0.0, 1.0);
    uvec2 _960 = uvec2(uint(_568.x), uint(_568.y)) >> (uvec2(MobileBasePass_Forward_LightGridPixelSizeShift) & uvec2(31u));
    vec3 _401;
    if (float(MobileReflectionCapture_Params.y > 0.0) != 0.0)
    {
        _401 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _636, (MobileReflectionCapture_Params.y - 1.0) - (1.0 - (1.2001953125 * log2(max(_693, 0.00100040435791015625))))).xyz * View_SkyLightColor.xyz;
    }
    else
    {
        _401 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _636, (View_ReflectionCubemapMaxMip - 1.0) - (1.0 - (1.2001953125 * log2(max(_693, 0.00100040435791015625))))).xyz * MobileReflectionCapture_Params.w;
    }
    vec4 _344 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _693) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _345 = _344.x;
    vec2 _353 = (vec2(-1.0400390625, 1.0400390625) * ((min(_345 * _345, _313) * _345) + _344.y)) + _344.zw;
    highp vec3 _1008 = ((((_239 * (_251 / max(9.9999997473787516355514526367188e-06, _252))) + _253) * _222) + ((((mix(_911 * _269, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_274 - (max(2.0 * _274, 0.4000000059604644775390625) * (1.0 - sqrt(_269))), -1.0) * 0.5) + 0.5, _699, _899), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _908, 0.0).xyz) * _290) * 1.0) + ((_911 * (((_231 * _320.x) + vec3(_304 * _320.y)) * (mix(min(_919 * _919, 2048.0), min(_922 * _922, 2048.0), _283) * ((_273 * 0.25) + 0.25)))) * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.z)) * (MobileDirectionalLight_DirectionalLightColor.xyz * _269))) + (((_401 * mix(1.0, min((_251 + dot(_253, vec3(0.300048828125, 0.58984375, 0.1099853515625))) / max(MobileReflectionCapture_Params.x, 9.9999997473787516355514526367188e-05), View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.z), smoothstep(0.0, 1.0, clamp((_693 * View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.x) + View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.y, 0.0, 1.0)))) * 1.0) * ((_231 * _353.x) + vec3(_304 * _353.y)));
    uint _1009 = ((((min(uint(max(0.0, log2((_550 * MobileBasePass_Forward_LightGridZParams.x) + MobileBasePass_Forward_LightGridZParams.y) * MobileBasePass_Forward_LightGridZParams.z)), uint(MobileBasePass_Forward_CulledGridSize.z - 1)) * uint(MobileBasePass_Forward_CulledGridSize.y)) + _960.y) * uint(MobileBasePass_Forward_CulledGridSize.x)) + _960.x) * 2u;
    uvec4 _1017 = texelFetch(ps1, int(_1009 + 1u));
    uint _1018 = _1017.x;
    uint _1033 = (uint((Primitive_Flags & 1024u) != 0u) | (uint((Primitive_Flags & 2048u) != 0u) << 1u)) | (uint((Primitive_Flags & 4096u) != 0u) << 2u);
    uint _1034 = min(min(texelFetch(ps1, int(_1009)).x, MobileBasePass_Forward_NumLocalLights), MobileBasePass_Forward_NumLocalLights);
    highp vec3 _1036;
    _1036 = _1008;
    highp vec3 _1037;
    SPIRV_CROSS_LOOP
    for (uint _1039 = 0u; _1039 < _1034; _1036 = _1037, _1039++)
    {
        uint _1048 = texelFetch(ps2, int(_1018 + _1039)).x * 6u;
        highp vec4 _1050 = texelFetch(ps0, int(_1048));
        highp vec4 _1052 = texelFetch(ps0, int(_1048 + 1u));
        highp vec4 _1054 = texelFetch(ps0, int(_1048 + 2u));
        highp vec4 _1056 = texelFetch(ps0, int(_1048 + 3u));
        highp float _1057 = _1050.w;
        highp float _1058 = _1057 * _1057;
        highp vec3 _1059 = _1050.xyz;
        highp vec3 _1060 = in_var_TEXCOORD8.xyz - _1059;
        if ((dot(_1060, _1060) * _1058) > 1.0)
        {
            _1037 = _1036;
            continue;
        }
        uint _1067 = floatBitsToUint(_1054.w);
        if (((_1067 >> 8u) & _1033) == 0u)
        {
            _1037 = _1036;
            continue;
        }
        highp float _1076 = _1052.w;
        highp vec4 _1091 = vec4(float((_1067 & 1u) != 0u), float((_1067 & 2u) != 0u), float((_1067 & 4u) != 0u), float((_1067 & 8u) != 0u));
        highp vec3 _1092 = _1059 - in_var_TEXCOORD8.xyz;
        highp float _1093 = dot(_1092, _1092);
        highp vec3 _1095 = _1092 * inversesqrt(_1093);
        highp float _1112;
        if (_1076 == 0.0)
        {
            highp float _1104 = _1093 * _1058;
            highp float _1107 = clamp(1.0 - (_1104 * _1104), 0.0, 1.0);
            _1112 = (_1107 * _1107) * (1.0 / (_1093 + 1.0));
        }
        else
        {
            highp vec3 _1099 = _1092 * _1057;
            _1112 = pow(1.0 - clamp(dot(_1099, _1099), 0.0, 1.0), _1076);
        }
        highp float _1123;
        if (((_1067 >> 16u) & 3u) == 2u)
        {
            highp float _1120 = clamp((dot(_1095, _1054.xyz) - _1056.x) * _1056.y, 0.0, 1.0);
            _1123 = _1112 * (_1120 * _1120);
        }
        else
        {
            _1123 = _1112;
        }
        highp vec3 _1170;
        SPIRV_CROSS_BRANCH
        if (_1123 > 0.0)
        {
            float _357 = mix(1.0, dot(vec4(1.0), _1091), dot(_1091, vec4(1.0)));
            highp float _1131 = max(0.0, dot(_150, normalize(_586 + _1095)));
            highp vec4 _1133 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _887, 0.0);
            float _367 = _1133.z;
            highp float _1136 = max(clamp(_693 * (_1133.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
            float _371 = clamp(_693 * (_1133.y * 2.0), 0.0, 1.0);
            float _358 = mix(_1136, _371, _367);
            float _359 = dot(_150, _1095);
            highp vec3 _1148 = vec3(1.0) * max(0.0, dot(_150, _1095));
            highp float _1153 = 1.0 - (_1131 * _1131);
            float _374 = _1136 * _1136;
            highp float _1154 = _1131 * _374;
            highp float _1156 = _374 / (_1153 + (_1154 * _1154));
            float _378 = _371 * _371;
            highp float _1157 = _1131 * _378;
            highp float _1159 = _378 / (_1153 + (_1157 * _1157));
            vec4 _390 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _358) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _391 = _390.x;
            vec2 _399 = (vec2(-1.0400390625, 1.0400390625) * ((min(_391 * _391, _313) * _391) + _390.y)) + _390.zw;
            _1170 = (((mix(_1148 * _357, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_359 - (max(2.0 * _359, 0.4000000059604644775390625) * (1.0 - sqrt(_357))), -1.0) * 0.5) + 0.5, _699, _899), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _908, 0.0).xyz) * _290) * 1.0) + ((_1148 * (((_231 * _399.x) + vec3(_304 * _399.y)) * (mix(min(_1156 * _1156, 2048.0), min(_1159 * _1159, 2048.0), _367) * ((_358 * 0.25) + 0.25)))) * 1.0)) * ((_1052.xyz * _1123) * _357);
        }
        else
        {
            _1170 = vec3(0.0);
        }
        _1037 = _1036 + _1170;
    }
    vec3 _77 = _1036 * 1.0;
    vec4 _402 = vec4(_77.x, _77.y, _77.z, _539.w);
    _402.w = 0.0;
    highp vec3 _1173 = min((_402.xyz * View_PreExposure).xyz, vec3(32512.0, 32512.0, 32256.0));
    out_var_SV_Target0 = vec4(_1173.x, _1173.y, _1173.z, _402.w);
    out_var_SV_Target1 = gl_FragCoord.z;
}

